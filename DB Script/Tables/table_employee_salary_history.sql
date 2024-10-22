CREATE TABLE dbo.employee_salary_history
(
    id BIGINT IDENTITY(1,1),
    employee_id BIGINT,
    salary BIGINT,
    date_time DATETIME,
    PRIMARY KEY(id),
    FOREIGN KEY (employee_id) REFERENCES employee(id)
)