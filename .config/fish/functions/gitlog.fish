# Defined in - @ line 1
function gitlog --description 'alias gitlog=git log --pretty=format:"%h %an %ar - %s"'
	git log --pretty=format:"%h %an %ar - %s" $argv;
end
