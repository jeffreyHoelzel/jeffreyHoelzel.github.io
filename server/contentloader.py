import os
import json
from pathlib import Path
from typing import List, Dict, Any
from fastapi import HTTPException
from schemas import ProjectMetadata, ImageMetadata, HomeMetadata, Link, SocialLink

CONTENT_DIR = Path(os.getenv("CONTENT_DIR", "content"))
PROJECTS_DIR = CONTENT_DIR / "projects"
HOMEPAGE_DATA = CONTENT_DIR / "home.json"
MEDIA_PREFIX = "/media/"

def load_homepage() -> HomeMetadata:
    return _build_homepage()

def _ensure_dirs_exists() -> None:
    PROJECTS_DIR.mkdir(parents=True, exist_ok=True)

def _build_homepage() -> HomeMetadata:
    try:
        with open(HOMEPAGE_DATA, "r") as file:
            raw_data = json.load(file)
        
    except FileNotFoundError as e:
        raise HTTPException(status_code=500, detail=f"Invalid or missing metadata in {HOMEPAGE_DATA}: {e}")

    name = raw_data.get("name")
    headline = raw_data.get("headline", None)
    summary = raw_data.get("summary")
    location = raw_data.get("location", None)

    raw_avatar = raw_data.get("avatar", None)
    if raw_avatar:
        relative_path = str(raw_avatar.get("path", "")).lstrip("/").replace("\\", "/")
        avatar = ImageMetadata(\
            url=f"{MEDIA_PREFIX}{relative_path}", 
            alt=raw_avatar.get("alt")    
        )

    raw_contact = raw_data.get("contact", None)
    if raw_contact:
        contact = Link(
            label=raw_contact.get("label"), 
            url=raw_contact.get("url")
        )

    raw_socials = raw_data.get("socials", [])
    if raw_socials:
        socials = []
        for raw_social in raw_socials:
            socials.append(SocialLink(
                label=raw_social.get("label"), 
                url=raw_social.get("url"), 
                icon=raw_social.get("icon", None)
            ))

    raw_actions = raw_data.get("actions", [])
    if raw_actions:
        actions = []
        for raw_action in raw_actions:
            actions.append(Link(
                label=raw_action.get("label"), 
                url=raw_action.get("url")
            ))

    return HomeMetadata(
        name=name, 
        headline=headline, 
        summary=summary, 
        avatar=avatar, 
        location=location, 
        contact=contact, 
        socials=socials, 
        actions=actions
    )

def _build_project(raw_data: Dict[str, Any]) -> ProjectMetadata:
    slug = raw_data.get("slug")
    name = raw_data.get("name")
    description = raw_data.get("description")
    links = raw_data.get("links", [])
    
    images: List[ImageMetadata] = []
    for image in raw_data.get("images", []):
        relative_path = str(image.get("path", "")).lstrip("/").replace("\\", "/")
        if not relative_path: continue

        images.append(ImageMetadata(
            url=f"{MEDIA_PREFIX}{relative_path}", 
            alt=image.get("alt")
        ))

    return ProjectMetadata(
        slug=slug, 
        name=name, 
        description=description, 
        images=images, 
        links=links
    )

def list_projects() -> List[ProjectMetadata]:
    _ensure_dirs_exists()
    projects: List[ProjectMetadata] = []

    for entry in sorted(PROJECTS_DIR.glob("*.json")):
        try:
            data = json.loads(entry.read_text(encoding="utf-8"))
            projects.append(_build_project(data))

        except Exception as e:
            raise HTTPException(status_code=500, detail=f"Invalid or missing content in {entry.name}: {e}")
        
    return projects

def get_project(slug: str) -> ProjectMetadata:
    _ensure_dirs_exists()
    path = PROJECTS_DIR / f"{slug}.json"
    if not path.exists():
        raise HTTPException(status_code=404, detail=f"Project {slug} not found")
    
    try:
        data = json.loads(path.read_text(encoding="utf-8"))
        project = _build_project(data)
        
        if project.slug != slug:
            raise ValueError("Slugs do not match")
        
        return project 
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Invalid or missing content in {path.name}: {e}")

if __name__ == "__main__":
    _build_homepage()
