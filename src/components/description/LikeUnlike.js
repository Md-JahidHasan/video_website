import React from 'react';
import LikeButton from './../../assets/like.svg'
import UnLikeButton from './../../assets/unlike.svg'

const LikeUnlike = ({video}) => {
    return (
        <div className="flex gap-10 w-48">
                                    <div className="flex gap-1">
                                        <button className="shrink-0">
                                            <img
                                                className="w-5 block"
                                                src={LikeButton}
                                                alt="Like"
                                            />
                                        </button>
                                        <div
                                            className="text-sm leading-[1.7142857] text-slate-600"
                                        >
                                            100K
                                        </div>
                                    </div>
                                    <div className="flex gap-1">
                                        <div className="shrink-0">
                                            <img
                                                className="w-5 block"
                                                src={UnLikeButton}
                                                alt="Unlike"
                                            />
                                        </div>
                                        <div
                                            className="text-sm leading-[1.7142857] text-slate-600"
                                        >
                                            100K
                                        </div>
                                    </div>
                                </div>
    );
};

export default LikeUnlike;