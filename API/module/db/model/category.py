from sqlalchemy.orm import relationship
from sqlalchemy import Column, Integer, String
from API.module.db.database import Base


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
