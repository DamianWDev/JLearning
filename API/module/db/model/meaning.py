from sqlalchemy.orm import relationship

from sqlalchemy import Column
from sqlalchemy import Integer, String, ForeignKey

from API.module.db.database import Base


class Meaning(Base):
    __tablename__ = 'meaning'

    id = Column(Integer, primary_key=True)
    meaning = Column(String(255))
    kanji_id = Column(ForeignKey('kanji.id'), primary_key=True)
    word_id = Column(ForeignKey('word.id'), primary_key=True)

    kanji_meaning = relationship("Kanji", back_populates="meaning_collection")
    word_meaning = relationship("Words", back_populates="meaning_collection")
