const mongoose = require('mongoose');
const Mentions = mongoose.model('Mentions');

exports.listMentions = async () => {
  const res = await Mentions.find({}, 'friend mention -_id');
  return res;
};

exports.createMention = async data => {
  const mention = new Mentions(data);
  await mention.save();
};

// get
exports.getMentions = async data => {
    const res = await Mentions.findOne({ friend: data });
    return res;
};
  
  // update
exports.updateMention = async (filter, data) => {
    const doc = await Mentions.findOneAndUpdate(
        filter, 
        data, 
        { new: true, upsert: true }
    );
    return doc;
};