using System.Globalization;
using Microsoft.AspNetCore.Mvc;
using PhoneNumberChecker.Models;
using PhoneNumberChecker.Services;
using PhoneNumbers;

namespace PhoneNumberChecker.Controllers;

[ApiController]
[Route("api/[controller]")]
public class PhoneNumberController : ControllerBase
{
    private readonly ILogger<PhoneNumberController> _logger;
    private readonly PhoneService _phoneService;

    public PhoneNumberController(ILogger<PhoneNumberController> logger, PhoneService phoneService)
    {
        _logger = logger;
        _phoneService = phoneService;
    }


    [HttpGet(Name = "GetSupportedCountries")]
    [Route("get-supported-countries")]
    public ActionResult<IEnumerable<SupportedCountries>> GetSupportedCountries()
    {
        IEnumerable<SupportedCountries> supportedCountries = _phoneService.GetSupportedCountries();

        return Ok(supportedCountries);
    }

    [HttpPost(Name = "IsNumberValid")]
    [Route("is-number-valid")]
    public ActionResult<NumberValidationDTO> IsNumberValid([FromBody] NumberValidationPayload payload)
    {
        if (payload.countryCode == 0 || payload.phoneNumber == 0)
        {
            return BadRequest("0 is not a valid number");
        }

        try
        {
            NumberValidationDTO dto = _phoneService.IsNumberValid(payload.formattedNbr, payload.countryCode);
            return Ok(dto);
        }
        catch (Exception ex)
        {
            return BadRequest(ex.Message);
        }

    }
}
