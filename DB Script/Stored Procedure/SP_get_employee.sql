CREATE OR ALTER PROCEDURE dbo.employee_get
@employee_id BIGINT = NULL
AS
BEGIN
    BEGIN TRY
        IF @employee_id = 0 SET @employee_id = NULL

        SELECT
            id,
            first_name,
            last_name,
            age,
            employee_code
        FROM dbo.employee WITH(NOLOCK)
        WHERE (ISNULL(@employee_id,0) = 0 OR id = @employee_id)

    END TRY
    BEGIN CATCH
        DECLARE @error_message VARCHAR(MAX) = ERROR_MESSAGE()
        RAISERROR(@error_message,0,0)
    END CATCH
END