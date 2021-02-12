using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace hospital_BackEnd.Migrations
{
    public partial class createpatienttable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "patients",
                columns: table => new
                {
                    id = table.Column<Guid>(nullable: false),
                    name = table.Column<string>(maxLength: 50, nullable: false),
                    fileNo = table.Column<int>(maxLength: 50, nullable: false),
                    citizenId = table.Column<string>(maxLength: 20, nullable: false),
                    birthDate = table.Column<DateTime>(nullable: false),
                    gender = table.Column<bool>(nullable: false),
                    nationality = table.Column<string>(nullable: false),
                    phoneNumber = table.Column<string>(nullable: false),
                    email = table.Column<string>(nullable: true),
                    country = table.Column<string>(nullable: false),
                    city = table.Column<string>(nullable: false),
                    street = table.Column<string>(nullable: false),
                    address1 = table.Column<string>(nullable: false),
                    address2 = table.Column<string>(nullable: true),
                    contactPerson = table.Column<string>(nullable: false),
                    contactRelation = table.Column<string>(nullable: false),
                    contactPhone = table.Column<string>(nullable: false),
                    firstVisitDate = table.Column<DateTime>(nullable: false),
                    recordCreationDate = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_patients", x => x.id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "patients");
        }
    }
}
