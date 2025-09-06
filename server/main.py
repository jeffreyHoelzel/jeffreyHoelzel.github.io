import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = os.getenv("CORS_ORIGINS", "http://127.0.0.1:3000").split(",")

app.add_middleware(
    CORSMiddleware, 
    allow_origins=origins, 
    allow_credentials=False, 
    allow_methods=["*"], 
    allow_headers=["*"]
)

@app.get("/")
def root():
    return {"message": "Hello, World!"}

