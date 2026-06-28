import Foundation
import Vision
import CoreImage
import AppKit

guard CommandLine.arguments.count >= 3 else {
    FileHandle.standardError.write("usage: cutout <in> <out>\n".data(using: .utf8)!)
    exit(64)
}
let inURL = URL(fileURLWithPath: CommandLine.arguments[1])
let outURL = URL(fileURLWithPath: CommandLine.arguments[2])

guard let ci = CIImage(contentsOf: inURL) else { exit(2) }
let handler = VNImageRequestHandler(ciImage: ci, options: [:])
let req = VNGenerateForegroundInstanceMaskRequest()
do { try handler.perform([req]) } catch { exit(3) }
guard let obs = req.results?.first else { exit(4) }

do {
    let buf = try obs.generateMaskedImage(ofInstances: obs.allInstances,
                                          from: handler,
                                          croppedToInstancesExtent: true)
    let out = CIImage(cvPixelBuffer: buf)
    let ctx = CIContext()
    guard let cg = ctx.createCGImage(out, from: out.extent) else { exit(5) }
    let rep = NSBitmapImageRep(cgImage: cg)
    guard let png = rep.representation(using: .png, properties: [:]) else { exit(6) }
    try png.write(to: outURL)
} catch { exit(7) }
