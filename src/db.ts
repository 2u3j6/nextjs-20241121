import { JSONFilePreset } from 'lowdb/node'

// Read or create db.json
const defaultData:{posts:{id:string,title:string,content:string}[]} = { posts: [] }
const db = await JSONFilePreset('db.json', defaultData)


await db.write()

export default db