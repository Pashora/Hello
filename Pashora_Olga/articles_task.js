//Задача. Вывести все статьи, в которых есть теги alpha, beta (оба тега сразу)
db.articles.find(
    {tags: {$all: ["alpha", "beta"]}}
)
//Вывести треки с продолжительностью до 1млн сек(вкл)
db.tracks.find(
    {duration_secs:{$lte:1000000}}
)
