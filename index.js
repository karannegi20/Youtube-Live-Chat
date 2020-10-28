const request = require('request')

const get_chat_id = async () => {
    try {
        var options = {
            method: 'GET',
            url: 'https://youtube.googleapis.com/youtube/v3/liveBroadcasts?part=snippet%2CcontentDetails%2Cstatus&broadcastStatus=upcoming&access_token=ya29.a0AfH6SMBrpk8Fdc9ATNw9Rgy6Pwg25-JpSUEZZGru1LCy1v4ZfyvfxGS1nTLM0DUf1QqEKGGWGoV9TSKn_cbn1pznZksjqRuh0Z60cGp7eyK5nNzKzLk_Mq_EhQ_W19HHg1PRdU8w2Ctecsl9BzfMo9uWNWXmJWOU58I',
        };

        request(options, function (err, response) {
            if (err) {
                console.log(err)
            }
            resData = JSON.parse(response.body);
            console.log(resData)
            // console.log('Live Chat ID : ', resData.items[0].id.videoId)
        });
    } catch (err) {
        console.log(err)
    }
}

get_chat_id()