import 'package:flutter/material.dart';
import 'package:flutter_blue_plus/flutter_blue_plus.dart';
import 'package:mobile_scanner/mobile_scanner.dart';
import 'package:permission_handler/permission_handler.dart';

void main() {
  runApp(const MaterialApp(
    home: VendingApp(),
    debugShowCheckedModeBanner: false,
  ));
}

class VendingApp extends StatefulWidget {
  const VendingApp({super.key});

  @override
  State<VendingApp> createState() => _VendingAppState();
}

class _VendingAppState extends State<VendingApp> {
  BluetoothDevice? targetDevice;
  BluetoothCharacteristic? targetCharacteristic;
  bool isScanning = false;

  // Bluetooth နဲ့ Permission တွေကို စတင်လုပ်ဆောင်ခြင်း
  void startConnect() async {
    await [
      Permission.bluetoothScan,
      Permission.bluetoothConnect,
      Permission.location,
      Permission.camera
    ].request();

    setState(() => isScanning = true);
    await FlutterBluePlus.startScan(timeout: const Duration(seconds: 5));

    FlutterBluePlus.scanResults.listen((results) async {
      for (ScanResult r in results) {
        // Bluetooth နာမည် HC-05 သို့မဟုတ် HC-06 ကို ရှာခြင်း
        if (r.device.platformName == "HC-05" || r.device.platformName == "HC-06") {
          await FlutterBluePlus.stopScan();
          try {
            // Version အသစ်မှာ တက်တတ်တဲ့ license error ကို ဖြေရှင်းပြီးသား
            await r.device.connect(); 
            setState(() {
              targetDevice = r.device;
              isScanning = false;
            });
            _discoverServices(r.device);
          } catch (e) {
            debugPrint("Connection Error: $e");
          }
          break;
        }
      }
    });
  }

  void _discoverServices(BluetoothDevice device) async {
    List<BluetoothService> services = await device.discoverServices();
    for (var s in services) {
      for (var c in s.characteristics) {
        if (c.properties.write) {
          setState(() => targetCharacteristic = c);
        }
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("Vending Machine Control"),
        backgroundColor: Colors.blueGrey[50],
        foregroundColor: Colors.black87,
        elevation: 0,
      ),
      body: targetDevice == null 
        ? Center(
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                const Icon(Icons.bluetooth_disabled, size: 80, color: Colors.grey),
                const SizedBox(height: 20),
                ElevatedButton.icon(
                  onPressed: startConnect, 
                  icon: Icon(isScanning ? Icons.sync : Icons.bluetooth),
                  label: Text(isScanning ? "Scanning..." : "Connect Bluetooth"),
                  style: ElevatedButton.styleFrom(padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 12)),
                ),
              ],
            ),
          )
        : Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              const Padding(
                padding: EdgeInsets.all(16.0),
                child: Text("Select Your Snack", style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
              ),
              Expanded(
                child: ListView(
                  children: [
                    // မုန့်စာရင်းများ
                    _buildSnackItem("Potato Chips", "1000 Ks", Icons.breakfast_dining, "A"),
                    _buildSnackItem("Chocolate Bar", "1500 Ks", Icons.lunch_dining, "B"),
                    _buildSnackItem("Coke Can", "800 Ks", Icons.local_drink, "C"),
                  ],
                ),
              ),
            ],
          ),
    );
  }

  Widget _buildSnackItem(String name, String price, IconData icon, String cmd) {
    return Card(
      margin: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(15)),
      child: ListTile(
        leading: Icon(icon, size: 40, color: Colors.orange),
        title: Text(name, style: const TextStyle(fontWeight: FontWeight.bold)),
        subtitle: Text(price),
        trailing: ElevatedButton(
          onPressed: () {
            Navigator.push(context, MaterialPageRoute(builder: (context) => 
              ScannerPage(onBuy: (scanCode) {
                // QR ဖတ်ပြီးတာနဲ့ Arduino ဆီ Command ပို့မယ်
                targetCharacteristic?.write(cmd.codeUnits);
                ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text("Buying $name...")));
              })
            ));
          },
          style: ElevatedButton.styleFrom(shape: const StadiumBorder()),
          child: const Text("Buy"),
        ),
      ),
    );
  }
}

class ScannerPage extends StatelessWidget {
  final Function(String) onBuy;
  const ScannerPage({super.key, required this.onBuy});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text("Scan QR Code")),
      body: MobileScanner(
        onDetect: (capture) {
          final List<Barcode> barcodes = capture.barcodes;
          if (barcodes.isNotEmpty && barcodes.first.rawValue != null) {
            onBuy(barcodes.first.rawValue!);
            Navigator.pop(context); // ဖတ်ပြီးရင် မူလ Screen ကို ပြန်သွားမယ်
          }
        },
      ),
    );
  }
}