using PhoneNumberChecker.Services;
using Serilog;
using Serilog.Events;
using Serilog.Sinks.SystemConsole.Themes;

var builder = WebApplication.CreateBuilder(args);

Log.Logger = new LoggerConfiguration()
    .MinimumLevel.Debug()
    .MinimumLevel.Override("Microsoft", LogEventLevel.Warning)
    .MinimumLevel.Override("System", LogEventLevel.Warning)
    .MinimumLevel.Override("Microsoft.AspNetCore.Authentication", LogEventLevel.Information)
    .Enrich.FromLogContext()
    .WriteTo.File("logs\\log.txt", rollingInterval: RollingInterval.Day)
    .WriteTo.Console(outputTemplate: "[{Timestamp:HH:mm:ss} {Level}] {SourceContext}{NewLine}{Message:lj}{NewLine}{Exception}{NewLine}", theme: AnsiConsoleTheme.Literate).CreateLogger();

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

