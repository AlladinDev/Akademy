import mongoose from "mongoose";

declare global {
    var dbCache: {
    conn: mongoose | null;
    promise: Promise<typeof mongoose> | null;
  };
}

// This export is necessary to make the file a module, even if it's empty.
// Without it, the `declare global` block might not be correctly picked up.
export { };