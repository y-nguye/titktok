import * as request from '../utils/request';

export const search = async (q, type = 'less') => {
    try {
        const res = await request.getX('/users/search', {
            params: {
                q,
                type,
            },
        });
        return res.data;
    } catch (err) {
        console.log(err);
    }
};
