using PhoneNumberChecker.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddCors();
builder.Services.AddSpaStaticFiles(configuration: options => { options.RootPath = "wwwroot"; });
builder.Services.AddControllers();

builder.Services.AddSingleton<PhoneService>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseCors(builder =>
 {
     builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
 });
}

app.UseSpaStaticFiles();
app.MapControllers();

app.MapFallbackToFile("index.html");

app.Run();

