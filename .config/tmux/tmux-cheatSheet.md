#
CTrl-a is bind-key  
bind-key r reload lai config file         

bind-key b chia ngang     
bind-key v chia doc         

# Windows
bind-key c create panel
bind-key , rename panel

bind-key num-8 chon panel-8
bind-key & close current windows
bind-key <Ctrl s> setw synchronize-panes nhap lieu tat ca cac windows


# Session

```
tmux new -s <session-name>
tmux kill-session -t <session-name>
tmux ls

tmux attach -t <session-name>
```
bind-key d Dettach from session
bind-key $ rename session
bind-key s Show all session

# Copy-mode-vi  
```
bind-key Escape       # go into copy mode  = visual mode in vim   
bind-key v            # begin-select   
bind-key y            # copy to buffer   
bind-key p            # choose-buffer   
bind-key C-c          #exit copy-mode   
```
