-- Write your MySQL query statement below
-- select data which has low fat and recyclable...

select product_id from products
where low_fats = 'Y' and recyclable = 'Y';
