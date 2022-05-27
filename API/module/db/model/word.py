from sqlalchemy.orm import relationship
from sqlalchemy import Column, Integer, Unicode, String
from API.module.db.database import Base


class Word(Base):
    __tablename__ = 'word'

    id = Column(Integer, primary_key=True)
    word = Column(Unicode(32))
    url = Column(String(255))

    meaning_collection = relationship("Meaning", back_populates='word_meaning')
    categorization_collection = relationship("Categorization", back_populates="word_categorization")

    def __repr__(self):
        return f"""
        Kanji(id={self.id}, 
        word={self.word}, 
        url={self.url})
        """
