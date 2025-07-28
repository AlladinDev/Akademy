import mongoose from "mongoose"


//initially it will be unset so set it with null values
if (!global.dbCache) {
    global.dbCache = {
        conn: null,
        promise: null,
    };
}

export const ConnectToMongodD = async () => {
    //if connection is there already return back
    if (global.dbCache.conn) {
        return
    }

    if (!global.dbCache.promise) {
        const mongoDbUrl = process.env.MONGODB_URL
        if (!mongoDbUrl) {
            throw new Error("mongodb url not present in env file")
        }
        global.dbCache.promise = mongoose.connect(mongoDbUrl)
    }

    //now set global variables for connection and promise
    global.dbCache.conn = await global.dbCache.promise
    return
}