const pageList = {
    page: function (listQuery) {
        var sql = 'SELECT * FROM ' + listQuery.table;
        sql = this.condition(sql, listQuery)
        if (listQuery.page && listQuery.pageSize) {
            var pos = (listQuery.page - 1) * listQuery.pageSize
            var end = listQuery.page * listQuery.pageSize
            sql += ' LIMIT ' + pos + ',' + end
        }
        return sql
    },

    count: function (listQuery) {
        var sql = 'SELECT count(*) as count FROM ' + listQuery.table;
        sql = this.condition(sql, listQuery)
        return sql
    },

    condition: function (sql, listQuery) {
        var d = listQuery.like
        if (d != undefined) {
            sql += ' where 1=1 '
            for (const key in d) {
                sql = sql + ' AND ' + key + ' like '
                if (d.hasOwnProperty(key)) {
                    const element = d[key];
                    sql += element
                }
            }

        }
        d = listQuery.and
        if (d != undefined) {
            sql += ' where 1=1 '
            for (const key in d) {
                sql = sql + ' AND ' + key + ' =  '
                if (d.hasOwnProperty(key)) {
                    const element = d[key];
                    sql += element
                }
            }

        }
        d = listQuery.or
        if (d != undefined) {
            sql += ' where 1=2 '
            for (const key in d) {
                sql = sql + ' OR ' + key + ' =  '
                if (d.hasOwnProperty(key)) {
                    const element = d[key];
                    sql += '"' + element + '"'
                }
            }

        }
        return sql
    }
}

const base = {
    getCourseList: function (params) {
        var sql = 'select * from  pub_content where id in ('
        for (let index = 0; index < params.length; index++) {
            const element = params[index];
            sql += element + ","
        }
        sql = sql.substring(0, sql.lastIndexOf(','))
        sql += ')'
        return sql;
    },
    getList: function (table, params) {
        var sql = 'select * from ' + table + ' where id in ('
        for (let index = 0; index < params.length; index++) {
            const element = params[index];
            sql += element + ","
        }
        sql = sql.substring(0, sql.lastIndexOf(','))
        sql += ')'
        return sql;
    },
}



const work = {
    delete: 'delete  from work where id=?'
}

const customers = {
    login: 'select * from customers where tel=? AND password=?'
}
/**  首页 */
const resource = {
    getAll: 'select * from resource',
    getOne: 'select * from resource where id=?'
}
//实战
const reclist = {
    getAll: 'select * from reclist'
}
//好课程
const newlist = {
    getAll: 'select * from newlist'
}

//猿问
const wendalist = {
    getAll: 'select * from wendalist'
}

/**  详情 */
const classData = {
    getClassData: 'select * from classData where id=?'
}

const chapterlist = {
    getChapterlist: 'select * from chapterlist cl where cl.cla_id in (select c.id from classData c where c.id=?)'
}

const intro = {
    getIntro: 'select * from intro cl where cl.cla_id = ?',
    getOne: 'select * from intro cl where cl.id = ?'
}

const teacherOpt = {
    getTeacher: 'select * from teacher cl where cl.cla_id = ?',
    getOne: 'select * from teacher cl where cl.id = ?'
}

const rate = {
    getrate: 'select * from rate cl where cl.cla_id in (select c.id from classData c where c.id=?)'
}


/**  课程 */

const course_class = {
    getAll: 'select * from course_class cl'
}

const typelist = {
    find: 'select * from typelist cl where cc_id=?'
}

const courselist = {
    find: 'select * from courselist cl where cc_id=?'
}



const userOpt = {
    login: 'select * from user where username="?" and password="?" ',
    getOne: 'select * from user where id=?',

    updateF: 'update user set followers="?" where id=?',
    updateL: 'update user set likes="?" where id=?',
    updateBio: 'update user set bio="?" where id=?',
    updateNick: 'update user set nickname="?" where id=?',
    updatePass: 'update user set password="?" where id=?',
    updatePhoto: 'update user set photo="?" where id=?',
}

const pub_content = {
    getOne: 'select * from pub_content where id=?',
    getAll: 'select * from pub_content',
    find: 'select * from pub_content where cus_id=?',
    findByTitle: 'select * from pub_content where title like "%?%"',
    delete: 'delete  from pub_content where id=?',
    inc_like: 'update pub_content set like_count=like_count+1 where id=?',
    des_like: 'update pub_content set like_count=like_count-1 where id=?',
    inc_com: 'update pub_content set com_count=com_count+1 where id=?',
    des_com: 'update pub_content set com_count=com_count-1 where id=?',
    topN: 'SELECT * FROM pub_content ORDER BY like_count DESC LIMIT 0,3'
}

const user_pub = {
    find: 'select pc.* from user u left join user_pub up on up.cus_id=u.id left join pub_content pc on pc.id=up.pub_id where u.id=?',
    delete: 'delete from user_pub where cus_id=? AND pub_id=?',
    findLike: 'select * from user_pub where cus_id=? AND pub_id=?',
    findMyLike: 'select * from user_pub where cus_id=?'
}

const user_follow = {
    find: 'SELECT * FROM pub_content WHERE cus_id in( SELECT uf.cus_id FROM user u LEFT JOIN user_follow uf ON uf.cus_follow_id=u.id  WHERE u.id=?)',
    findMyFollow: 'SELECT u.* FROM user u WHERE id IN (	SELECT	uf.cus_id	FROM user_follow uf	WHERE uf.cus_follow_id =?)',
    findFollow: 'select * from user_follow where cus_id=? AND cus_follow_id=?',
    delete: 'delete from user_follow where cus_id=? AND cus_follow_id=?'
}


const commentlist = {
    find: 'select c.id ,c.cus_nickname,c.`comment`,c.cus_id,c.pub_id ,date_format(c.create_time,"%Y-%m-%d %T") AS create_time from commentlist c where pub_id=?',
}

const pub_house = {
    getAll: 'select * from pub_house',
    find:'select * from pub_house where cus_id=?',
    deleteOne:'delete from pub_house where id=?',
    getOne:'select * from pub_house where id=?',
    search: function (listQuery) {

        var sql = 'SELECT * FROM pub_house where 1=1 '
        if (listQuery.name) {
            sql = sql + ' AND name like "%' + listQuery.name + '%"'
        }
        if (listQuery.cityCode) {
            sql = sql + ' AND area = "' + listQuery.cityCode + '"'
        }
        if (listQuery.rentalType) {
            sql = sql + ' AND rentalType = "' + listQuery.rentalType + '"'
        }
        if (listQuery.houseType) {
            sql = sql + ' AND houseType = "' + listQuery.houseType + '"'
        }
        if (listQuery.bedroomNum) {
            sql = sql + ' AND bedroomNum = ' + listQuery.bedroomNum
        }
        if (listQuery.toiletNum) {
            sql = sql + ' AND toiletNum = ' + listQuery.toiletNum
        }
        if (listQuery.parlourNum) {
            sql = sql + ' AND parlourNum = ' + listQuery.parlourNum
        }
        var order = listQuery.sort

        if (order == 'SORT_AUTO') {
            
        } else if (order == 'SORT_PRICE_ASC') {
            sql = sql + ' ORDER by rentalPrice ASC'
        } else if (order == 'SORT_PRICE_DESC') {
            sql = sql + ' ORDER by rentalPrice DESC'
        } else if (order == 'SORT_TIME_ASC') {
            sql = sql + ' ORDER by create_time ASC'
        } else if (order == 'SORT_TIME_DESC') {
            sql = sql + ' ORDER by create_time DESC'
        }
       
        if (listQuery.page && listQuery.pageSize) {
            var pos = (listQuery.page - 1) * listQuery.pageSize
            var end = listQuery.page * listQuery.pageSize
            sql += ' LIMIT ' + pos + ',' + end
        }
       
        
        return sql
    },
    update:function (params) {
        var d=params
        var sql='UPDATE `pub_house` SET '
        for (const key in d) {
            if (key!='id'&&key!='create_time') {
                sql=sql+' '+key+'="'+d[key] +'",'
            }
        }
        sql = sql.substring(0, sql.lastIndexOf(','))
        sql=sql+' WHERE id=?'
        sql=sql.replace('?',d.id)
        return sql;
    }
}

// 常量
const cityList = ['墨尔本', '悉尼', '堪培拉', '黄金海岸', '布里斯班', '卧龙岗', '霍巴特', '珀斯']

const houseList = [
    {
        name: '公寓Apartment',
        type: 'APARTMENT'
    },
    {
        name: '别墅house',
        type: 'HOUSE'
    },
    {
        name: '其他',
        type: 'other'
    }
]

const rentalList = [
    {
        name: '单间',
        type: 'STUDIO'
    },
    {
        name: '整租',
        type: 'WHOLE'
    },
    {
        name: '合租',
        type: 'SUBLET'
    },
    {
        name: '其他',
        type: 'OTHERS'
    }
]

const rentalPeriodUnitList = [
    {
        name: 'YEAR',
        type: 'YEAR'
    },
    {
        name: 'MONTH',
        type: 'MONTH'
    },
    {
        name: 'DAY',
        type: 'DAY'
    },
]
//   
module.exports = {
    pageList,
    userOpt,
    work,
    base,
    customers,
    resource,
    reclist,
    newlist,
    wendalist,
    classData,// 详情
    chapterlist,
    intro,
    teacherOpt,
    rate,
    commentlist,
    course_class,
    typelist,
    courselist,

    pub_house,
    pub_content,
    user_pub,
    user_follow,
    // 常量
    cityList,
    houseList,
    rentalList,
    rentalPeriodUnitList
};