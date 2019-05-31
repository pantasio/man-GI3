# Defined in - @ line 1
function tmuxconf --description 'alias tmuxconf=nvim ~/.config/tmux/.tmux.conf'
	nvim ~/.config/tmux/.tmux.conf $argv;
end
