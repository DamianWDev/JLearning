from sqlalchemy.orm import relationship
from sqlalchemy import Column, ForeignKey, Integer

from base import Base


class KanjiOccurrence(Base):
    __tablename__ = 'kanji_occurrence'

    id = Column(Integer, primary_key=True)
    volume_id = Column(ForeignKey('volume.id'), primary_key=True)
    kanji_id = Column(ForeignKey('kanji.id'), primary_key=True)

    kanji_kanji_occurrence = relationship("Kanji", back_populates="kanji_occurrence_collection")
    volume_kanji_occurrence = relationship("Volume", back_populates="kanji_occurrence_collection")
