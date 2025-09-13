from typing import List, Dict, Optional
from pydantic import BaseModel

class ImageMetadata(BaseModel):
    url: str
    alt: Optional[str] = None

class Link(BaseModel):
    label: str
    url: str
    external: bool = True

class ProjectMetadata(BaseModel):
    slug: str
    name: str
    description: str
    images: List[ImageMetadata]
    links: Optional[List[Dict[str, str]]] = None

class SocialLink(Link):
    icon: Optional[str] = None

class HomeMetadata(BaseModel):
    name: str
    headline: Optional[str] = None
    summary: str
    avatar: Optional[ImageMetadata] = None
    location: Optional[str] = None
    contact: Optional[Link] = None
    socials: List[SocialLink] = []
    actions: List[Link] = []
    # extended capabilities: featured section (featured projects, accomplishments, etc.)
