import diskinfo from 'diskinfo'
console.log(diskinfo.getDrives);
const getDriveList = async () => {
    return await new Promise((resolve, reject) => {
        diskinfo.getDrives((err, drives) => {
            if (err) reject(err)
            resolve(drives)
        })
    })
}

export {
    getDriveList
}

