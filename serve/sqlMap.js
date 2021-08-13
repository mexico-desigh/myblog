var sqlMap = {
  user: {
    // 添加用户
    add: 'insert into user(name,pwd) values (?,?)',
    select: 'select * from user where name like "%"?"%"'
  }
}