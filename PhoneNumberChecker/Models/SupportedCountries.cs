using System.Globalization;

namespace PhoneNumberChecker.Models;

public partial class SupportedCountries
{
    public int CountryCode { get; set; }
    public string? CountryName { get; set; }
    public string? NumberPlaceHolder { get; set; }
    public string? Region { get; set; }

    // Get the default region
    public bool IsDefault => RegionInfo.CurrentRegion.TwoLetterISORegionName == Region;

}