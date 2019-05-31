# Defined in - @ line 1
function dotfile --description 'alias dotfile=git --git-dir=/home/pantasio/Workspace/dotfiles/ --work-tree=/home/pantasio/'
	git --git-dir=/home/pantasio/Workspace/dotfiles/ --work-tree=/home/pantasio/ $argv;
end
