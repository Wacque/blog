pro-install:
	npm run build
	rsync -avz --exclude-from=rsync-ignore.txt --delete ./ my:/var/www/blog
	ssh my 'cd /var/www/blog && npm install && npm run start'

pro:
	npm run build
	rsync -avz --exclude-from=rsync-ignore.txt --delete ./ my:/var/www/blog
	ssh my 'cd /var/www/blog && npm run start'

