import { timeStamp } from 'console'
import mongoose from 'mongoose'

const ObjectId = mongoose.Schema.Types.ObjectId
const itemStatusSchema = new mongoose.Schema(
  {
    itemId: ObjectId,
    employeeName: String || null,
    receivedDate: Date || null,
    returnedDate: Date || null,
    description: String || null
  },
  { timestamps: true }
)

export default mongoose.model('item-statuses', itemStatusSchema)
