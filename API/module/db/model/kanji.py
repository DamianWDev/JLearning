from sqlalchemy.orm import relationship
from sqlalchemy import Column, Integer, Unicode, String
from API.module.db.database import Base


class Kanji(Base):
    __tablename__ = 'kanji'

    id = Column(Integer, primary_key=True)
    character = Column(Unicode(1))
    strokes = Column(Integer)
    level = Column(Integer)
    img_path = Column(String(255))
    img_extension = Column(String(4))
    url = Column(String(255))

    kanji_occurrence_collection = relationship("KanjiOccurrence", back_populates='kanji_kanji_occurrence')
    pronunciation_collection = relationship("Pronunciation", back_populates="kanji_id")
    meaning_collection = relationship("Meaning", back_populates='kanji_meaning')
    categorization_collection = relationship("Categorization", back_populates="kanji_categorization")

    def __repr__(self):
        return f"""
        Kanji(id={self.id}, 
        character={self.character}, 
        strokes={self.strokes}, 
        level={self.level},
        img_path={self.img_path}, 
        img_extension={self.img_extension},
        url={self.url})
        """
