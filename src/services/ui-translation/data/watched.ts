import { merge } from '../helper';

merge(/^\/watched/, undefined, {
    'You do not have any watched tags. You can change your watched tags from ':
        '你当前没有关注任何标签。你可以修改关注的标签：',
});
