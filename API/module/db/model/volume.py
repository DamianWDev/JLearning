from sqlalchemy.orm import relationship
from sqlalchemy import Column, Integer, String
from API.module.db.database import Base


class Volume(Base):
    __tablename__ = 'volume'

    id = Column(Integer, primary_key=True)
    volume_number = Column(Integer)
    manga_id = Column(Integer)
    img_path = Column(String(255))
    img_extension = Column(String(4))

    kanji_occurrence_collection = relationship("KanjiOccurrence", back_populates="volume_kanji_occurrence")

    def __repr__(self):
        return f"""
        Volume(id={self.id}, 
        volume_number={self.volume_number}, 
        manga_id={self.manga_id}, 
        img_path={self.img_path}, 
        img_extension={self.img_extension}
        """
