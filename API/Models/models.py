from sqlalchemy.orm import declarative_base, relationship

from sqlalchemy import Column, Table
from sqlalchemy import Integer, String, Unicode, ForeignKey

Base = declarative_base()


# Relationships


class KanjiOccurrence(Base):
    __tablename__ = 'kanji_occurrence'

    id = Column(Integer, primary_key=True)
    volume_id = Column(ForeignKey('volume.id'), primary_key=True)
    kanji_id = Column(ForeignKey('kanji.id'), primary_key=True)

    kanji_kanji_occurrence = relationship("Kanji", back_populates="volumes")
    volume_kanji_occurrence = relationship("Volume", back_populates="kanjis")


class Pronunciation(Base):
    __tablename__ = 'pronunciation'

    id = Column(Integer, primary_key=True)
    type = Column(String(16))
    pronoun = Column(String(64))
    kanji_id = Column(Integer, ForeignKey('kanji.id'))


class Meaning(Base):
    __tablename__ = 'meaning'

    id = Column(Integer, primary_key=True)
    meaning = Column(String(255))
    kanji_id = Column(ForeignKey('kanji.id'), primary_key=True)
    word_id = Column(ForeignKey('word.id'), primary_key=True)

    kanji_meaning = relationship("Kanji", back_populates="words")
    word_meaning = relationship("Words", back_populates="kanjis")


class Categorization(Base):
    __tablename__ = 'categorization'

    id = Column(Integer, primary_key=True)
    category_id = Column(ForeignKey('category.id', primary_key=True))
    word_id = Column(ForeignKey('word.id', primary_key=True))
    kanji_id = Column(ForeignKey('kanji.id', primary_key=True))

    category_categorization = relationship("Category", back_populates="categorization_collection")
    word_categorization = relationship("Word", back_populates="categorization_collection")
    kanji_categorization = relationship("Kanji", back_populates="categorization_collection")


# Models


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


class Volume(Base):
    __tablename__ = 'volume'

    id = Column(Integer, primary_key=True)
    volume_number = Column(Integer)
    manga_id = Column(Integer)
    img_path = Column(String(255))

    kanjis = relationship("KanjiOccurrence", back_populates="volume_kanji_occurrence")

    def __repr__(self):
        return f"""
        Volume(id={self.id}, 
        volume_number={self.volume_number}, 
        manga_id={self.manga_id}, 
        img_path={self.img_path})
        """


class Kanji(Base):
    __tablename__ = 'kanji'

    id = Column(Integer, primary_key=True)
    character = Column(Unicode(1))
    strokes = Column(Integer)
    level = Column(Integer)
    img_path = Column(String(255))
    url = Column(String(255))

    volumes = relationship("KanjiOccurrence", back_populates='kanji_kanji_occurrence')
    pronunciations = relationship("Pronunciation", back_populates="kanji_id")
    # meanings = relationship("Meanings", back_populates="kanji_id")
    words = relationship("Meaning", back_populates='kanji_meaning')
    categorization_collection = relationship("Categorization", back_populates="kanji_categorization")

    def __repr__(self):
        return f"""
        Kanji(id={self.id}, 
        character={self.character}, 
        strokes={self.strokes}, 
        level={self.level},
        img_path{self.img_path}, 
        url={self.url})
        """


class Word(Base):
    __tablename__ = 'word'

    id = Column(Integer, primary_key=True)
    word = Column(Unicode(32))
    url = Column(String(255))

    kanjis = relationship('Meaning', back_populates='word_meaning')
    categorization_collection = relationship("Categorization", back_populates="word_categorization")

    def __repr__(self):
        return f"""
        Kanji(id={self.id}, 
        word={self.word}, 
        url={self.url})
        """


class Category(Base):
    __tablename__ = 'category'

    id = Column(Integer, primary_key=True)
    name = Column(String(255))
    color = Column(String(255))
    icon = Column(String(255))

    categorization_collection = relationship("Categorization", back_populates="category_categorization")

    def __repr__(self):
        return f"""
        Category(id={self.id}, 
        name={self.icon}, 
        color={self.color}, 
        icon={self.icon})
        """
