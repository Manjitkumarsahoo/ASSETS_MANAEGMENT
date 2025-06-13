import Asset from "../models/Asset.js"

//Add Asset
export const addAsset = async (req, res, next) => {
    try {
        const assetDetails = new Asset(req.body)
        await assetDetails.save()
        res.status(201).send({ message: "Asset added" })
    } catch (error) {
        next(error) //calls the error handling middleware
    }
}

//Get All Asset
export const getAllAssets = async (req, res, next) => {
    try {
        const allAssets = await Asset.find()
        res.status(200).send(allAssets)
    } catch (error) {
        next(error)
    }
}


//Delete asset by id
export const deleteAsset = async (req, res, next) => {
    try {
        const { id } = req.params
        await Asset.deleteOne({ _id: id })
        res.status(200).send({ message: "Asset Data Removed" })
    } catch (error) {
        next(error)
    }
}


//update asset by ID
export const updateAsset = async (req, res, next) => {
    try {
        const { id } = req.query
        await Asset.updateOne({ _id: id }, { ...req.body })
        res.status(200).send({ message: "Asset Details Updated" })
    } catch (error) {
        next(error)
    }
}
