const Post = require('../models/Post.js');

class postController {
    async getAllPosts(req, res, next) {
        try {
            const posts = Post.find({}).populate('author');
            res.status(200).json({
                status: 'success',
                results: posts.length, // > 0 ? posts,
                data: { posts },
            })
        } catch (error) {

        }

    }
    async createOnePost(req, res, next) {
        try {
            const { userId } = req.user;
            const post = await Post.create({ ...req.body, author: userId });
            res.status(200).json({
                status: 'success',
                data: { post }
            })
        } catch (error) {

        }

    }
    async updateOnePost(req, res, next) {
        try {
            const { postId } = req.params;
            const post = await Post.findByIdAndUpdate(postId, { ...req.body }, { new: true }, { runValidators: true });

            res.status(200).json({
                status: 'success',
                data: { post }
            })
        } catch (error) {

        }


    }
    async deleteOnePost(req, res, next) {
        try {
            const { postId } = req.params;
            const post = await Post.deleteOne({postId: postId});

            res.status(200).json({
                status: 'success',
                message: 'Post deleted successfully'
            })
        } catch (error) {

        }

    }
}

module.exports = new postController();