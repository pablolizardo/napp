# bash

for port in {3000..3010}; do
    lsof -ti:$port | xargs kill -9
done

rm -rf ./next
