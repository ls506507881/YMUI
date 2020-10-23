rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "update" &&
git branch -M master &&
git remote add origin git@github.com:ls506507881/yuemi-ui-website.git &&
# git remote add origin git@gitee.com:li-shuai/yuemi-ui-website.git
git push -f -u origin master &&
cd ..
echo https://ls506507881.github.io/yuemi-ui-website/index.html