from sqlalchemy import Column, ForeignKey, Integer, String
from API.module.db.database import Base


class Pronunciation(Base):
    __tablename__ = 'pronunciation'

    id = Column(Integer, primary_key=True)
    type = Column(String(16))
    pronoun = Column(String(64))
    kanji_id = Column(Integer, ForeignKey('kanji.id'))
