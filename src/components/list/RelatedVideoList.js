import React from 'react';
import RelatedVideo from './RelatedVideo';

const RelatedVideoList = () => {
    return (
        <div
                        class="col-span-full lg:col-auto max-h-[570px] overflow-y-auto"
                    >
                        {/* <!-- single related video --> */}
                        <RelatedVideo></RelatedVideo>
                    </div>
    );
};

export default RelatedVideoList;