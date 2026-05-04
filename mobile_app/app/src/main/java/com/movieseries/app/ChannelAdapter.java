package com.movieseries.app;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageButton;
import android.widget.ImageView;
import android.widget.TextView;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import java.util.List;

public class ChannelAdapter extends RecyclerView.Adapter<ChannelAdapter.ChannelViewHolder> {

    private List<ChannelItem> channelList;

    public ChannelAdapter(List<ChannelItem> channelList) {
        this.channelList = channelList;
    }

    @NonNull
    @Override
    public ChannelViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext())
                .inflate(R.layout.item_channel, parent, false);
        return new ChannelViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull ChannelViewHolder holder, int position) {
        ChannelItem channel = channelList.get(position);
        holder.channelName.setText(channel.getName());
        holder.channelDescription.setText(channel.getDescription());
        
        holder.playButton.setOnClickListener(v -> 
            Toast.makeText(holder.itemView.getContext(), 
                "جاري تشغيل: " + channel.getName(), 
                Toast.LENGTH_SHORT).show()
        );
    }

    @Override
    public int getItemCount() {
        return channelList.size();
    }

    static class ChannelViewHolder extends RecyclerView.ViewHolder {
        ImageView channelIcon;
        TextView channelName;
        TextView channelDescription;
        ImageButton playButton;

        ChannelViewHolder(View itemView) {
            super(itemView);
            channelIcon = itemView.findViewById(R.id.channel_icon);
            channelName = itemView.findViewById(R.id.channel_name);
            channelDescription = itemView.findViewById(R.id.channel_description);
            playButton = itemView.findViewById(R.id.play_button);
        }
    }
}
