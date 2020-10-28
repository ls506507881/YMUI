rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "update" &&
git branch -M master &&
# git remote add origin git@github.com:ls506507881/YMUI.git &&
git remote add origin git@gitee.com:li-shuai/ymui.git &&
git push -f -u origin master &&
cd ..
echo https://ls506507881.github.io/YMUI/index.html