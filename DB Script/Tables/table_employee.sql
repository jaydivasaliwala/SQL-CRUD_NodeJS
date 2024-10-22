CREATE TABLE dbo.employee
(
    id BIGINT IDENTITY(1,1),
    first_name VARCHAR(512),
    last_name VARCHAR(512),
    age TINYINT,
    employee_code VARCHAR(512) UNIQUE,
    PRIMARY KEY(id)
)