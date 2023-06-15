package com.example.springboot.model;

import java.util.HashMap;
import java.util.Map;

public enum Category {
     MULTIVITAMINS(0),
    TABLETS(1),
    BABYPRODUCTS(2),
    LIQUIDS(3),
    CAPSULE(4),
    INHALERS(5);

    private int value;
    private static Map map = new HashMap<>();

    private Category(int value) {
        this.value = value;
    }

    static {
        for (Category category : Category.values()) {
            map.put(category.value, category);
        }
    }

    public static Category valueOf(int category) {
        return (Category) map.get(category);
    }

    public int getValue() {
        return value;
    }
}
