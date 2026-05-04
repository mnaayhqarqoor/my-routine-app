package com.movieseries.app;

public class ChannelItem {
    private String name;
    private String description;

    public ChannelItem(String name, String description) {
        this.name = name;
        this.description = description;
    }

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }
}
