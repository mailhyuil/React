import React from 'react';

const BucketList = ({ bucketList }) => {

    const bucketBody = bucketList.map(bucket => {
        return (
            <tr>
                <td>
                    {bucket.b_bucket}
                </td>
            </tr>);
    })

    return (
        <table className="w3-table w3-talbe-all">
            <tbody>{bucketBody}</tbody>
        </table>
    );
};

export default BucketList;