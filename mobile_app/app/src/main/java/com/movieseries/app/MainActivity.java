package com.movieseries.app;

import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.os.Bundle;

import java.util.ArrayList;
import java.util.List;

public class MainActivity extends AppCompatActivity {

    private RecyclerView channelsRecycler;
    private ChannelAdapter adapter;
    private List<ChannelItem> channelList;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        channelsRecycler = findViewById(R.id.channels_recycler);
        channelsRecycler.setLayoutManager(new LinearLayoutManager(this));

        channelList = new ArrayList<>();
        channelList.add(new ChannelItem("قناة الأفلام", "أحدث الأفلام العالمية والعربية"));
        channelList.add(new ChannelItem("قناة المسلسلات", "مسلسلات حصرية ومميزة"));
        channelList.add(new ChannelItem("قناة الرياضة", "مباريات ودوريات عالمية"));
        channelList.add(new ChannelItem("قناة الأطفال", "برامج ترفيهية للأطفال"));
        channelList.add(new ChannelItem("قناة الأخبار", "آخر الأخبار المحلية والعالمية"));
        channelList.add(new ChannelItem("قناة الوثائقية", "برامج وثائقية متنوعة"));
        channelList.add(new ChannelItem("قناة الطبخ", "وصفات وأطباق شهية"));
        channelList.add(new ChannelItem("قناة الموسيقى", "أجمل الأغاني والحفلات"));

        adapter = new ChannelAdapter(channelList);
        channelsRecycler.setAdapter(adapter);
    }
}
