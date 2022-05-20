from sqlalchemy import Column, Integer, String

from base import Base


class Manga(Base):
    __tablename__ = 'manga'

    id = Column(Integer, primary_key=True)
    name = Column(String(255))
    img_path = Column(String(255))

    def __repr__(self):
        return f"""
        Manga(id={self.id}, 
        name={self.name}, 
        img_path={self.img_path})
        """
