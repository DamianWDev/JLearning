from sqlalchemy.orm import relationship

from sqlalchemy import Column
from sqlalchemy import Integer, ForeignKey
from base import Base


class Categorization(Base):
    __tablename__ = 'categorization'

    id = Column(Integer, primary_key=True)
    category_id = Column(ForeignKey('category.id', primary_key=True))
    word_id = Column(ForeignKey('word.id', primary_key=True))
    kanji_id = Column(ForeignKey('kanji.id', primary_key=True))

    category_categorization = relationship("Category", back_populates="categorization_collection")
    word_categorization = relationship("Word", back_populates="categorization_collection")
    kanji_categorization = relationship("Kanji", back_populates="categorization_collection")
