db.users.aggregate([
    { $sample: { size: 1 } },
    { $project: { _id: 0, fullname: 1} }
])
